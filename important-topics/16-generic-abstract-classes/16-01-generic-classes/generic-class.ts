class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  update(id: number, updated: Partial<T>): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;
    this.items[index] = { ...this.items[index], ...updated };
    return true;
  }

  delete(id: number): boolean {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return this.items.length < initialLength;
  }
}

type Task = {
  id: number;
  title: string;
  completed: boolean;
};
type Project = {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
};
const projectRepository = new Repository<Project>();
const project1: Project = {
  id: 1,
  name: 'TypeScript Mentoring Platform',
  description: 'Educational tools for Bangla-speaking devs',
  tasks: [
    { id: 101, title: 'Design quiz engine', completed: false },
    { id: 102, title: 'Translate cheat sheets', completed: true },
  ],
};

projectRepository.add(project1);
const allProjects = projectRepository.getAll();
const singleProject = projectRepository.getById(1);
console.log(allProjects);
console.log(singleProject);
projectRepository.update(1, {
  description: 'Updated platform for advanced TypeScript mentoring',
});
console.log(projectRepository.getById(1));
projectRepository.delete(1);
console.log(projectRepository.getAll());
