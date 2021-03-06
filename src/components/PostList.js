import React, { Component } from 'react';

import PostItem from './Post';

import itachi1 from '../assets/itachi1.jpg';
import itachi2 from '../assets/itachi2.jpg';
import kakashi from '../assets/kakashi.jpg';
import naruto from '../assets/naruto.jpg';

class PostList extends Component {
  state = {
    newPost: '',
    posts: [
      {
        id: 1,
        author: {
          name: 'Itachi Mendes',
          avatar: itachi1,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, boruto é bom?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Naruto Fernandes',
              avatar: naruto
            },
            content: "Eu não curto não sinceramente"
          },
          {
            id: 2,
            author: {
              name: 'Kakashi',
              avatar: kakashi,
            },
            content: "Minha opinão é que o enredo é ate legal, mas nao gostei que seleram o naruto e o sasuke"
          }
        ],
      }, 
      {
        id: 1,
        author: {
          name: 'Itachi Pinheiro',
          avatar: itachi2,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, boruto é bom?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Naruto Fernandes',
              avatar: kakashi
            },
            content: "Alguns falam que sim"
          }
        ], 
      }
    ],
  };

  componentDidUpdate(_, prevState) {
    if (prevState.posts !== this.state.posts) {
      localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }
  }

  handleDelete = (post) => {
    this.setState({ posts: this.state.posts.filter(p => p !== post) });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} onDelete={() => this.handleDelete(post)} />
        ))}
      </div>
    );
  }
}

export default PostList;