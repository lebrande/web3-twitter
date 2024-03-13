//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Twitter {
	uint256 public immutable MAX_TWEET_STRING_LENGHT = 100;
	uint256 public immutable MIN_TWEET_STRING_LENGHT = 5;

	struct Tweet {
		uint256 id;
		address author;
		string content;
		uint256 createdAt;
	}
	uint256 private nextTweetId;

	mapping(uint256 => Tweet) private tweets;
	mapping(address => mapping(address => bool)) private followings;
	mapping(address => uint256) private followersCount;
	mapping(address => uint256) private followingsCount;
	mapping(address => uint256) private tweetsCount;

	event TweetSent(
		uint256 id,
		address indexed author,
		string content,
		uint256 createdAt
	);

	event FollowingChange(
		address indexed following,
		address indexed followed,
		bool isFollowing,
		uint256 timestamp
	);

	function tweet(string calldata _content) external {
		require(
			!containsOnlySpaces(_content),
			"Tweet content cannot contain only spaces"
		);
		require(
			strlen(_content) > MIN_TWEET_STRING_LENGHT,
			"Tweet content must be longer than 5 characters"
		);
		require(
			strlen(_content) <= MAX_TWEET_STRING_LENGHT,
			"Tweet content cannot be longer than 100 characters"
		);
		tweets[nextTweetId] = Tweet(
			nextTweetId,
			msg.sender,
			_content,
			block.timestamp
		);
		nextTweetId++;
		tweetsCount[msg.sender]++;
		emit TweetSent(nextTweetId, msg.sender, _content, block.timestamp);
	}

	function follow(address followed) external isNotSender(followed) {
		address following = msg.sender;
		require(
			followings[following][followed] == false,
			"User must be unfollowed before following"
		);
		followings[following][followed] = true;
		followersCount[followed]++;
		followingsCount[following]++;
		emit FollowingChange(following, followed, true, block.timestamp);
	}

	function unfollow(address unfollowed) external isNotSender(unfollowed) {
		address unfollowing = msg.sender;
		require(
			followings[unfollowing][unfollowed] == true,
			"User must be followed before unfollowing"
		);
		followings[unfollowing][unfollowed] = false;
		followersCount[unfollowed]--;
		followingsCount[unfollowing]--;
		emit FollowingChange(unfollowing, unfollowed, false, block.timestamp);
	}

	function getFollowingStatus(
		address following,
		address followed
	) external view returns (bool status) {
		return followings[following][followed];
	}

	function getFollowersCount(
		address author
	) external view returns (uint256 _followersCount) {
		return followersCount[author];
	}

	function getFollowingsCount(
		address author
	) external view returns (uint256 _followingsCount) {
		return followingsCount[author];
	}

	function getTweetsCount(
		address author
	) external view returns (uint256 _tweetsCount) {
		return tweetsCount[author];
	}

	function getNextTweetId() external view returns (uint256 _nextTweetId) {
		return nextTweetId;
	}

	function getTweet(
		uint256 _tweetId
	) external view returns (Tweet memory _tweet) {
		return tweets[_tweetId];
	}

	modifier isNotSender(address _address) {
		require(_address != msg.sender, "The address cannot be sender");
		_;
	}

	/**
	 * @dev Returns the length of a given string
	 *
	 * @param s The string to measure the length of
	 * @return The length of the input string
	 *
	 * source: https://github.com/ensdomains/ens-contracts/blob/master/contracts/ethregistrar/StringUtils.sol
	 */
	function strlen(string memory s) internal pure returns (uint256) {
		uint256 len;
		uint256 i = 0;
		uint256 bytelength = bytes(s).length;
		for (len = 0; i < bytelength; len++) {
			bytes1 b = bytes(s)[i];
			if (b < 0x80) {
				i += 1;
			} else if (b < 0xE0) {
				i += 2;
			} else if (b < 0xF0) {
				i += 3;
			} else if (b < 0xF8) {
				i += 4;
			} else if (b < 0xFC) {
				i += 5;
			} else {
				i += 6;
			}
		}
		return len;
	}

	function containsOnlySpaces(
		string memory s
	) internal pure returns (bool) {
		bytes memory inputBytes = bytes(s);

		/*
		 * Cast space character to byte(0x20) for compare
		 */
		string memory space = " ";
		bytes memory spaceByte = bytes(space);

		for (uint256 i = 0; i < inputBytes.length; i++) {
			if (inputBytes[i] != spaceByte[0]) {
				return false;
			}
		}

		return true;
	}
}
