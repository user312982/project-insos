import EditCitizenForm from "@/components/admin/EditCitizenForm";

interface EditCitizenPageProps {
  params: {
    nik: string;
  };
}

export default async function EditCitizenPage({
  params,
}: EditCitizenPageProps) {
  const nik = params.nik;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Data Warga</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <EditCitizenForm nik={nik} />
      </div>
    </div>
  );
}
