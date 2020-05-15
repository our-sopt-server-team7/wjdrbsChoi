let postData = [
    {
        id : 1,
        writer : "노드",
        content : "노드JS는 재밌습니다",
        title : "NodeJs",
        dateTime : "2020-05-12"
    },
    {
        id : 2,
        writer : "스프링",
        content : "스프링부트는 재밌습니다",
        title : "SpringBoot",
        dateTime : "2020-05-12"
    },
    {
        id : 3,
        writer : "장고",
        content : "장고는 재밌습니다",
        title : "Django",
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

    writer : async(author, title, content, dateTime) => {
        const last = postData.length - 1;          
        const idx = postData[last].idx + 1;

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

    update : async (idx, dao) => {
        
    }

}

module.exports = post;