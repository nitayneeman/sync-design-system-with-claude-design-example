import { Button } from '../components/ui/button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = { args: { children: 'Continue' } };
export const Outline = { args: { children: 'Cancel', variant: 'outline' } };
export const Destructive = { args: { children: 'Delete', variant: 'destructive' } };
export const Small = { args: { children: 'Continue', size: 'sm' } };
