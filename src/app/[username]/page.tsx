import { NextPage } from 'next';
import React from 'react';

interface ProfilePageProps {
    params: { username: string };
}

const ProfilePage: NextPage<ProfilePageProps> = ({ params }) => {
    return <div>ProfilePage: {params.username}</div>;
};

export default ProfilePage;
