import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = ({
  loadingPost,
  loadingUsers,
  post,
  users,
  getPost,
  getUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);
  return (
    <Sample
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  );
};

export default connect(
  ({ sample }) => ({
    loadingPost: sample.loading.post,
    loadingUsers: sample.loading.users,
    post: sample.post,
    users: sample.users,
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
