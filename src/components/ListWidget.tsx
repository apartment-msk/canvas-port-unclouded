interface ListWidgetProps {
  className?: string;
}

export function ListWidget({ className }: ListWidgetProps) {
  return (
    <div className={className}>
      <iframe
        src="https://homereserve.ru/HYkUIAGFQD"
        className="w-full min-h-[800px] border-0 rounded-lg"
        title="Каталог апартаментов"
        loading="lazy"
      />
    </div>
  );
}
