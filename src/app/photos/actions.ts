'use server';

import { list } from '@vercel/blob';

export async function getBlobs() {
  return await list({ prefix: 'gallery/' })
}