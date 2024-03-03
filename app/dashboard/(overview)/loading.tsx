import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <div>
      <strong>Your hot pizza is coming 🍕🔥🍕🔥🍕 ! ...</strong>
      <DashboardSkeleton />
    </div>
  );
}
