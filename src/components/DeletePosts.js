import React from 'react';
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './../aws-exports';
import { Component } from 'react';
Amplify.configure(aws_exports);

class DeletePost extends Component{
    render(){
        return(
            <button>Delete</button>
        )
    }
}

export default DeletePost;

