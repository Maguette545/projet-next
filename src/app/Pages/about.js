import Image from 'next/image';
import profilePic from '../public/images/profil.jpg';

export default function About() {
  return (
    <div>
      <h2>À propos de moi</h2>
      <Image src={profilePic} alt="Ma photo de profil" width={200} height={200} />
    </div>
  );
}
