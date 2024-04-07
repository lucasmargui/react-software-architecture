
import Link from 'next/link';

export default async function Home() {

  console.log("serverside rendering");

  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <div className="flex justify-center items-center h-screen">
     <Link
       href="/pages/redux"
       className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
     >
       <span>Concepts Redux</span> 
     </Link>
    </div>
 </main>
  );
}
