"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Trash2 } from "lucide-react";

interface Item {
  id: string;
  title?: string;
  name?: string;
  description: string | null;
  display_order: number;
}

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function ListContentEditor({
  table,
  labelField,
  items,
}: {
  table: "services" | "departments";
  labelField: "title" | "name";
  items: Item[];
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    await supabase.from(table).insert({
      [labelField]: String(data.get("label") ?? ""),
      description: String(data.get("description") ?? ""),
      display_order: items.length + 1,
    });

    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
    router.refresh();
  }

  async function handleUpdate(id: string, field: string, value: string) {
    const supabase = createClient();
    await supabase.from(table).update({ [field]: value }).eq("id", id);
    router.refresh();
  }

  async function handleDelete(id: string) {
    const supabase = createClient();
    await supabase.from(table).delete().eq("id", id);
    router.refresh();
  }

  return (
    <div>
      <form onSubmit={handleAdd} className="grid gap-4 border border-navy/10 bg-white p-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy" htmlFor={`${table}-label`}>
            {labelField === "title" ? "Service title" : "Department name"}
          </label>
          <input id={`${table}-label`} name="label" required className={inputClasses} />
        </div>
        <div>
          <label className="text-sm font-medium text-navy" htmlFor={`${table}-description`}>Description</label>
          <input id={`${table}-description`} name="description" className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" disabled={submitting}>{submitting ? "Adding…" : "Add"}</Button>
        </div>
      </form>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="border border-navy/10 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <input
                defaultValue={String(item[labelField] ?? "")}
                onBlur={(e) => handleUpdate(item.id, labelField, e.target.value)}
                className="w-full border-none bg-transparent font-display text-lg font-semibold text-navy focus-ring"
              />
              <button onClick={() => handleDelete(item.id)} aria-label="Delete" className="shrink-0 text-slate hover:text-red-600 focus-ring">
                <Trash2 size={18} />
              </button>
            </div>
            <textarea
              defaultValue={item.description ?? ""}
              onBlur={(e) => handleUpdate(item.id, "description", e.target.value)}
              rows={2}
              className="mt-2 w-full border-none bg-transparent text-sm text-slate focus-ring"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
