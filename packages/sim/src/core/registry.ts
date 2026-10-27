export class Registry<T> {
  private readonly entries = new Map<string, T>();
  constructor(private readonly kind: string) {}

  register(id: string, entry: T): void {
    if (this.entries.has(id)) throw new Error(`${this.kind} '${id}' is already registered`);
    this.entries.set(id, entry);
  }
  get(id: string): T {
    const entry = this.entries.get(id);
    if (entry === undefined) throw new Error(`Unknown ${this.kind} '${id}'`);
    return entry;
  }
  has(id: string): boolean { return this.entries.has(id); }
  ids(): string[] { return [...this.entries.keys()]; }
}