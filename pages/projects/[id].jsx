import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="font-raleway bg-black h-24">
      <p className="text-offWhite">Project {id}</p>
    </div>
  );
}
