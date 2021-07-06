import styled from '@emotion/styled'
import {Wrapper, BoardWriteWrapper, BoardTitleWrapper, BoardContentsWrapper, BoardContentsItem, BoardHalfContentItem, BoardContents, BoardNameblank, BoardPassblank, BoardTitleblank, BoardContent, BoardContentblank, BoardAddress, BoardAddblank1, BoardAddblank2, BoardAddblank3, BoardAddblank4, BoardYoutube, BoardYoutubeblank, BoardPhoto, BoardPhotobox1, BoardPhotobox2, BoardPhotobox3, BoardMainsetting, BoardMainset, BoardSend  
  } from '../../../styles/boards/new/BoardNew.styles'
export default function Board() {


    return(
       <Wrapper>
           <BoardWriteWrapper>
               <BoardTitleWrapper> 게시물 등록 </BoardTitleWrapper>
               <BoardContentsWrapper> 
                    <BoardContentsItem>
                        <BoardHalfContentItem> 작성자 </BoardHalfContentItem>
                        <BoardHalfContentItem> 비밀번호 </BoardHalfContentItem>
                        
                    </BoardContentsItem>
                    <BoardNameblank type="text" placeholder="이름을 적어주세요"></BoardNameblank>
                    <BoardPassblank type="password" placeholder="비밀번호를 입력해주세요"></BoardPassblank>

                    <BoardContentsItem>
                        <BoardContents> 제목 </BoardContents>
                    </BoardContentsItem>
                    <BoardTitleblank type="text" placeholder="제목을 입력해주세요"></BoardTitleblank>
                    <BoardContentsItem>
                        <BoardContent> 내용 </BoardContent>
                    </BoardContentsItem>
                    <BoardContentblank></BoardContentblank>
                    <BoardAddress> 주소 </BoardAddress>
                    <BoardAddblank1 type="text" placeholder="47150"></BoardAddblank1>
                    <BoardAddblank2>우편번호 검색</BoardAddblank2>
                    <BoardAddblank3></BoardAddblank3>
                    <BoardAddblank4></BoardAddblank4>
                    <BoardYoutube> 유튜브 </BoardYoutube>
                    <BoardYoutubeblank></BoardYoutubeblank>
                    <BoardPhoto> 사진첨부 </BoardPhoto>
                    <BoardPhotobox1> Upload </BoardPhotobox1>
                    <BoardPhotobox2> Upload </BoardPhotobox2>
                    <BoardPhotobox3> Upload </BoardPhotobox3>
                    <BoardMainsetting> 메인설정 </BoardMainsetting>
                    <BoardMainset> 유튜브 사진 </BoardMainset>
                    <BoardSend>등록하기</BoardSend>
                
               </BoardContentsWrapper>

            </BoardWriteWrapper>
       </Wrapper> 

    )
}