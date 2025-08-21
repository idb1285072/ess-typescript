type ID = string | number;
let userId: ID;
userId = 101;
userId = '10';
// userId = true;

type UserRole = 'admin' | 'editor' | 'viewer';
type Permission =
  | { role: 'admin'; canDelete: true }
  | { role: 'editor'; canDelete: false }
  | { role: 'viewer'; canDelete: false };
const canDeleteContent = (permission: Permission): boolean =>
  permission.canDelete;
const currentUser: Permission = {
  role: 'editor',
  canDelete: false,
};
console.log(canDeleteContent(currentUser));
