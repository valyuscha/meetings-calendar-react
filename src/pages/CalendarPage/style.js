import styled from 'styled-components'

export const CalendarPageWrapper = styled.div``

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 20px;
`

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
  margin: 0;
`

export const CalendarTools = styled.div`
  display: flex;
`

export const LogoutButtonWrapper = styled.div``

export const SelectWrapper = styled.div`
  width: 170px;    
  margin-left: 15px;
`

export const AddNewMeetingButtonWrapper = styled.div`
  margin-left: 15px; 
  display: ${p => (p.isLoggedIn && p.activeUser.canUserCreateMeeting ? 'block' : 'none')};
`