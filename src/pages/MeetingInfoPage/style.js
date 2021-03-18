import styled from 'styled-components'

export const MeetingInfoPageWrapper = styled.div`
  margin: 20px 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const GoBackTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`

export const GoBackButton = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
`

export const GoBackIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const Title = styled.h2`
  font-size: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const GoToEditMeetingPageButton = styled.button`
  background: none;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: ${({activeUser}) => activeUser && activeUser.canUserEditMeetingInfo ? 'block' : 'none'};
`

export const GoToEditMeetingPageIcon = styled.img`
  width: 35px;
  height: 35px;
`

export const MeetingInfoWrapper = styled.div``

export const MeetingInfoItemWrapper = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
    flex-direction: column;
  }
`

export const MeetingInfoItemName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`

export const MeetingInfoItemValue = styled.p`
  font-size: 16px;
  margin-left: 20px;
  line-height: 150%;
  max-height: 70px;
  word-wrap: break-word;
  overflow-y: auto;
`

export const ParticipantsList = styled.ul``

export const Participant = styled.li`
  margin: 0 0 10px 30px;
  overflow: visible;
`