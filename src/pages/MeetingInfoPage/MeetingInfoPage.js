import React, {useEffect, Children} from 'react'
import {useHistory} from 'react-router-dom'
import {goBack, editMeetingIcon} from 'assets'

import {
  MeetingInfoPageWrapper,
  Header,
  GoBackTitleWrapper,
  GoBackButton,
  GoBackIcon,
  Title,
  GoToEditMeetingPageButton,
  GoToEditMeetingPageIcon,
  MeetingInfoWrapper,
  MeetingInfoItemWrapper,
  MeetingInfoItemName,
  MeetingInfoItemValue,
  ParticipantsList,
  Participant
} from './style'

const MeetingInfoPage = () => {
  const history = useHistory()
  const editMeeting = JSON.parse(localStorage.getItem('editMeeting'))
  const activeUser = JSON.parse(localStorage.getItem('activeUser'))

  useEffect(() => {
    if (!activeUser || !editMeeting) {
      history.push('/')
    }
  }, [])

  const participants = editMeeting.data.participants.filter(participant => {
    return participant !== activeUser.name
  })

  participants.push('You')
  participants.reverse()

  return (
    <MeetingInfoPageWrapper>
      {editMeeting && (
        <>
          <Header>
            <GoBackTitleWrapper>
              <GoBackButton onClick={() => history.push('/')}>
                <GoBackIcon src={goBack} />
              </GoBackButton>
              <Title>{editMeeting.data.meetingName}</Title>
            </GoBackTitleWrapper>
            <GoToEditMeetingPageButton
              activeUser={activeUser}
              onClick={() => history.push('/edit-meeting')}>
              <GoToEditMeetingPageIcon src={editMeetingIcon} />
            </GoToEditMeetingPageButton>
          </Header>
          <MeetingInfoWrapper>
            <MeetingInfoItemWrapper>
              <MeetingInfoItemName>Meeting name:</MeetingInfoItemName>
              <MeetingInfoItemValue>{editMeeting.data.meetingName}</MeetingInfoItemValue>
            </MeetingInfoItemWrapper>
            <MeetingInfoItemWrapper>
              <MeetingInfoItemName>Day:</MeetingInfoItemName>
              <MeetingInfoItemValue>{editMeeting.data.selectedDay}</MeetingInfoItemValue>
            </MeetingInfoItemWrapper>
            <MeetingInfoItemWrapper>
              <MeetingInfoItemName>Time:</MeetingInfoItemName>
              <MeetingInfoItemValue>{editMeeting.data.selectedTime}</MeetingInfoItemValue>
            </MeetingInfoItemWrapper>
            <MeetingInfoItemWrapper>
              <MeetingInfoItemName>Participants:</MeetingInfoItemName>
              <ParticipantsList>
                {Children.toArray([...participants].map(participant => (
                  <Participant>{participant}</Participant>
                )))}
              </ParticipantsList>
            </MeetingInfoItemWrapper>
          </MeetingInfoWrapper>
        </>
      )}
    </MeetingInfoPageWrapper>
  )
}

export default MeetingInfoPage