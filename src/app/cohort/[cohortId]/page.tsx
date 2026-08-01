'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getCohortMaterials } from '@/registry';
import CohortWorkshop from '@/components/shells/workshop/CohortWorkshop';

/**
 * 期数物料工坊页（Client Component）。
 *
 * ★ 为什么不是 Server Component：
 *   CohortWorkshop 本身是 Client，且期数物料里携带 enrichmentRenderers（React.FC 函数集合）。
 *   函数不可跨 RSC 边界序列化传递，因此本页整体作为 Client 处理：
 *   getCohortMaterials 在客户端执行 → materials 不跨 RSC 边界 → 无需 JSON 序列化。
 *
 * ★ Next 15/16 sync-dynamic-apis 规则：
 *   无论 Server 还是 Client Component，params / searchParams 都是 Promise，必须解包：
 *     - Server Component：用 await params（异步函数）
 *     - Client Component：用 React.use(params)（React 19 hook，顶层同步解包 Promise）
 */
export default function CohortPage({
  params,
}: {
  params: Promise<{ cohortId: string }>;
}) {
  const { cohortId } = React.use(params);
  const materials = getCohortMaterials(cohortId);

  if (!materials) {
    notFound();
  }

  return <CohortWorkshop materials={materials} />;
}
