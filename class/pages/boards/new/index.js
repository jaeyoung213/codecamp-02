import styled from '@emotion/styled/types/base'
import {Wrapper,Title,Name,Password} from '../styles/Boards/new/BoardsNew.styles'
export default function Board() {


    return(
       <Wrapper>
           <Title>게시물등록</Title>
           <Name>작성자</Name>
           <Password>비밀번호</Password>
        
       </Wrapper> 

    )
}