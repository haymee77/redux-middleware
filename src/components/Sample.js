import React from 'react';

const Sample = ({ loadingPost, loadingUser, post, users }) => {
  return (
    <div>
      <section>
        <h3>포스트</h3>
        {loadingPost && '로딩 중...'}
        {!loadingPost && post && (
          <div>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h3>사용자 목록</h3>
        {loadingUser && '로딩 중..'}
        {!loadingUser && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
