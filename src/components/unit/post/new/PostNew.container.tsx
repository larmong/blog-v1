import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { router } from 'next/client';

import { db } from '../../../../commons/libraries/firebase/firebase.config';
import { CustomChangeEvent } from '../../../../commons/types/global.types';
import { Wrapper } from './PostNew.style';

export default function PostNewContainer() {
  const [newPost, setNewPost] = useState({
    type: '',
    title: '',
    date: '2023.11.07',
    content: '',
    writer: '루루',
  });

  const handleInputValue = (name: string) => (e: CustomChangeEvent) => {
    setNewPost({
      ...newPost,
      [name]: e.target.value,
    });
  };

  const onClickSubmit = async () => {
    try {
      const docRef = await doc(collection(db, 'boards'));
      await setDoc(docRef, {
        type: newPost.type,
        title: newPost.title,
        date: '2023.11.07',
        content: newPost.content,
        writer: '루루',
      });
      // void router.push('/post');
    } catch (error) {}
  };

  return (
    <Wrapper>
      type: <input type="text" value={newPost.type} onChange={handleInputValue('type')} />
      <br />
      title: <input type="text" value={newPost.title} onChange={handleInputValue('title')} />
      <br />
      content: <input type="text" value={newPost.content} onChange={handleInputValue('content')} />
      <br />
      <button onClick={onClickSubmit}>등록</button>
    </Wrapper>
  );
}
