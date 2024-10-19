'use client';
import React, { useState } from 'react'; // Import useState
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModel from './MeetingModel';

const MeetingTypeList = () => {

  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(); 

  const createMeeting = () => {
    
  }

  return (
    <section className="grid grid-cols-1 gap-5
    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isJoiningMeeting') }
        className="bg-orange-1"
      />
      <HomeCard 
      img="/icons/schedule.svg"
      title="Schedule Meeting"
      description="Plan your meetings"
      handleClick={() => setMeetingState('isScheduleMeeting') }
      className="bg-blue-1"
      />
      <HomeCard 
      img="/icons/recordings.svg"
      title="View recording"
      description="Check your recordings"
      handleClick={() => setMeetingState('isJoiningMeeting') }
      className="bg-purple-1"
      />
      <HomeCard 
      img="/icons/join-meeting.svg"
      title="Join Meeting"
      description="Via invitation link"
      handleClick={() => setMeetingState('isJoiningMeeting') }
      className="bg-yellow-1"
      />

      <MeetingModel 
        isOpen={meetingState === 'isInstantMeeting'}
        onClose = {() => setMeetingState(undefined)}
        title = "Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}

export default MeetingTypeList;