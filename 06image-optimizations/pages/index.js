import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import profilePic from '../public/home.jpg'



export default function Home() {
  return (
    <>
      {/* <Image src={profilePic} alt={"home image"} height={400} width={400}/>
      <Image src={'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'} alt={"home image"} height={400} width={400}/> */}

      <div >
      {/* Static Import with Automatic Sizing */}
      <div>
        <h2>Static Image with Automatic Sizing</h2>
        <Image
          src={profilePic}
          alt="Profile Picture"
          placeholder="blur"  // Shows a blurred version while loading
          quality={75}  // Adjust compression quality
        />
      </div>

      {/* Responsive Image */}
      <div>
        <h2 >Responsive Image</h2>
        <Image
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Responsive Landscape"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"  // Responsive sizing
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>

      {/* Fill Container */}
      <div className="relative h-64 w-full">
        <h2 >Fill Container Image</h2>
        <Image
          src={profilePic}
          alt="Background Image"
          fill
          sizes="70vw"
          style={{
            objectFit: 'cover'  // Covers entire container
          }}
        />
      </div>

      {/* Remote Image with Optimization */}
      <div>
        <h2>Remote Image Optimization</h2>
        <Image
          src={"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"}
          alt="Remote Optimized Image"
          width={500}
          height={300}
          priority  // Preload important images
        />
      </div>
    </div>
    </>
  );
}
