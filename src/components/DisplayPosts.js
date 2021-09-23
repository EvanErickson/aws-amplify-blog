import React from 'react';
import * as queries from './../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './../aws-exports';
import { Component } from 'react';
import DeletePost from './../components/DeletePosts'
Amplify.configure(aws_exports);


class DisplayPosts extends Component {

    state = {
        posts: []
    }

    componentDidMount = async () => {
        this.getPosts();
    }

    getPosts = async () => {
        const result = await API.graphql(graphqlOperation(queries.listPosts))
        this.setState({ posts: result.data.listPosts.items })
        // console.log("All Posts", result.data.listPosts.items)
    }

    render(){
        const { posts } = this.state
        return posts.map((post) => {
            return (
                <div className="posts" style={rowStyle} key={post.id}>
                    <h1>postTitle: {post.postTitle}</h1>
                    <span style={{ fontStyle: 'italic', color: '#0ca5e297'}}>
                        {"Wrote by" + " " + post.postOwnerUsername}
                        {" on "}
                        <time style={{ fontStyle: 'italic' }}>
                            {" "}
                            { new Date(post.createdAt).toDateString()}
                        </time>
                    </span>
                    <div>
                        {post.postBody}
                    </div>

                    <br />
                    <span>
                     <DeletePost />
                    </span>
                </div>
            )
        })
    }
}

const rowStyle = {
    background: '#f4f4fr',
    padding: '10px',
}

export default DisplayPosts;