import { z } from 'zod';

export const weaponDefinitionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  class: z.enum(['melee', 'ranger']),
  archetype: z.enum(['pierce', 'bludgeon', 'sever', 'slash', 'chain',
                     'tension', 'precision', 'scatter', 'explosive', 'barrage']),
  stats: z.object({
    damage: z.number().positive(),
    attacksPerSecond: z.number().positive(),
    durabilityPerUse: z.number().min(0),
    params: z.record(z.string(), z.number()),
  }),
  ability: z.object({
    id: z.string().min(1),
    cooldownSeconds: z.number().min(0),
    durabilityPerUse: z.number().min(0),
    params: z.record(z.string(), z.number()),
  }),
});

export type WeaponDefinition = z.infer<typeof weaponDefinitionSchema>;

export function parseWeapon(raw: unknown, source: string): WeaponDefinition {
  const result = weaponDefinitionSchema.safeParse(raw);
  if (!result.success) {
    const problems = result.error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');
    throw new Error(`Invalid weapon file ${source}: ${problems}`);
  }
  return result.data;
}