import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
  customers: any;
}) {
  const customers = await fetchCustomers();
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Table customers={customers} />
    </>
  );
}
