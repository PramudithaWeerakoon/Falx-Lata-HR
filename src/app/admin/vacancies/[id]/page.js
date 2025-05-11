'use client'

import VacancyForm from '@/app/components/Admin/VacancyForm';

export default function EditVacancyPage({ params }) {
  return <VacancyForm vacancyId={params.id} />;
}
