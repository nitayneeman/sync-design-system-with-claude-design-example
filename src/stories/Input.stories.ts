import { Input } from '../components/ui/input';

export default {
  title: 'Input',
  component: Input,
};

export const Default = { args: { placeholder: 'Email' } };
export const Disabled = { args: { placeholder: 'Email', disabled: true } };
export const Invalid = { args: { defaultValue: 'not-an-email', 'aria-invalid': true } };
