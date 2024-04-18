import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="font-semibold flex gap-2 pt-3 items-center justify-center text-gray-500">
      <Button variant="outline">Button</Button>
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="primary">Primary</Button>
    </main>
  );
}
