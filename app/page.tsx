import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="font-semibold flex gap-2 pt-3 items-center justify-center text-gray-500">
      <Button size={'sm'} variant="outline">
        Button
      </Button>
      <Button size={'default'}>Default</Button>
      <Button size={'lg'} variant="destructive">
        Destructive
      </Button>
      <Button variant="primary">Primary</Button>
    </main>
  );
}
