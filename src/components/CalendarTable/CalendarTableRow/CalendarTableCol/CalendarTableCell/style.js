import styled from 'styled-components'

export const Cell = styled.div`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, .3);
  border-left: none;
  border-bottom: none;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`

export const TimeCell = styled.p` 
  font-size: 14px;
  font-weight: 500;
`

export const CellContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  background: rgba(59, 125, 197, 0.2);
  box-sizing: border-box;
`

export const MeetingName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`

export const DeleteMeetingButton = styled.button`
  width: 13px;
  height: 13px;
  background: none;
  border: none;
  cursor: pointer;
  display: ${p => p.activeUser && p.activeUser.canUserDeleteMeeting ? 'block' : 'none'};
`

export const DeleteIcon = styled.img`
  width: 13px;
  height: 13px;
`