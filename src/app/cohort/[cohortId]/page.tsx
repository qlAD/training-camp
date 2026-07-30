import { notFound } from 'next/navigation';
import { getCohortMaterials } from '@/data/cohortsRegistry';
import CohortWorkshop from '@/components/CohortWorkshop';

export default async function CohortPage({
  params,
}: {
  params: Promise<{ cohortId: string }>;
}) {
  const { cohortId } = await params;
  const materials = getCohortMaterials(cohortId);

  if (!materials) {
    notFound();
  }

  return <CohortWorkshop materials={materials} />;
}
