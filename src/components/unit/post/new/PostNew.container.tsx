import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { router } from 'next/client';

import { BtnGroup, Wrapper } from './PostNew.style';
import { db } from '../../../../commons/libraries/firebase/firebase.config';
import { CustomChangeEvent } from '../../../../commons/types/global.types';
import NewContainer from '../../../commons/board/new/New.container';
import { useRouter } from 'next/router';

export default function PostNewContainer() {
  const router = useRouter();
  const [newPost, setNewPost] = useState({
    type: '',
    title: '',
    date: '2023.11.07',
    content: '',
    writer: '루루',
  });

  // const handleInputValue = (name: string) => (e: CustomChangeEvent) => {
  //   setNewPost({
  //     ...newPost,
  //     [name]: e.target.value,
  //   });
  // };

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
      <NewContainer />
      <BtnGroup>
        <button onClick={() => router.back()}>취 소</button>
        <button className="btn-full" onClick={onClickSubmit}>
          등 록
        </button>
      </BtnGroup>
    </Wrapper>
  );
}
