export type Option = {
  value: string;
  label: string;
};
export interface SelectProps {
  option: Option[];
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({ option, defaultValue, label, onChange }: SelectProps) => {
  return (
    <select
      onChange={onChange}
      name="price"
      id="price"
      defaultValue={defaultValue}>
      <option value="0" defaultChecked>
        {label}
      </option>
      {option.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
