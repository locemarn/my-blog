import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>18 de Setembro de 2019 * 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Post title</S.PostItemTitle>
        <S.PostItemDescription>Post description</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem