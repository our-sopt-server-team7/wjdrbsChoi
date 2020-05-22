let postData = [
    {
        idx : 1,
        author : "노드",
        title : "노드JS는 재밌습니다",
        content : "NodeJs",
        dateTime : "2020-05-12"
    },
    {
        idx : 2,
        author : "스프링",
        title : "스프링부트는 재밌습니다",
        content : "SpringBoot",
        dateTime : "2020-05-12"
    },
    {
        idx : 3,
        author : "장고",
        title : "장고는 재밌습니다",
        content : "Django",
        dateTime : "2020-05-12"
    }
]

const post = {
    // 게시글 전체 보여주기
    findAll : async() => {
        return postData;
    },

    // 게시글 하나 검색
    findOne : async(idx) => {
        return postData.filter(post => post.idx == idx);
    },

    // 게시글 쓰기

    write : async(author, title, content, dateTime) => {
        let last = postData.length - 1;

        let idx;
        // postData 에 아무것도 존재하지 않을 때 (첫 게시글 쓴다는 말)
        if (last == -1) {
            idx = 1; 
        }
        else {
            idx = postData[last].idx + 1;
        }
        
        const dao = {
            idx,
            author,
            title,
            content,
            dateTime
        }

        postData.push(dao);
        return idx;
    },

    // 게시글 수정
    update: async (idx, dao) => {
        for (key in dao) {
            if (dao[key] !== undefined) {
                console.log(key);
                postData[idx - 1][`${key}`] = dao[key];
            }
        }

        return postData[idx - 1];
    }

}

module.exports = post;