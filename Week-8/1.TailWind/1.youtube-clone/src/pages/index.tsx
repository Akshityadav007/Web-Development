// import Image from "next/image";
// import { Inter } from "next/font/google";
import { Appbar } from '@/components/Appbar';
import {VideoCard} from '../components/VideoCard';
import {VideoGrid} from '@/components/VideoGrid';

// const inter = Inter({subsets : ['latin']})

export default function Home() {
  return (
    <div>
      <Appbar />
      <VideoGrid />
    </div>
  );
}
