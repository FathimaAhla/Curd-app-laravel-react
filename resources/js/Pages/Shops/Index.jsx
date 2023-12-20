import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";

export default function Index({ auth, shops: initialShops }) {
    const [shops, setShops] = React.useState(initialShops);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shops</h2>}
        >
            <Head title="Shops" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex items-center justify-end mt-1 mb-2">
                                <Link
                                    className="ms-4"
                                    href={route("shops.create")}
                                >
                                    Add New Shop
                                </Link>
                            </div>

                            <table className="items-center bg-transparent w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Shop Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Website
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Address
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Contact No
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Description
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {shops.map((shop) => (
                                        <tr key={shop.id}>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                {shop.name}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {shop.website}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {shop.contact}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {shop.address}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {shop.description}
                                            </td>
                                            <td className="border-t-0 flex px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <Link
                                                    href={route("shops.show", {
                                                        shop: shop.id,
                                                    })}
                                                    className="bg-yellow-100 text-yellow-800 active:bg-yellow-100 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-yellow-400 border border-yellow-400"
                                                >
                                                    Show
                                                </Link>
                                                <Link
                                                    href={route("shops.edit", {
                                                        shop: shop.id,
                                                    })}
                                                    className="bg-green-100 text-green-800 active:bg-green-100 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-green-400 border border-green-400"
                                                >
                                                    Edit
                                                </Link>

                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        axios.delete(route('shops.destroy', {shop: shop.id})).then(() => {
                                                            setShops(shops.filter(p => p.id !== shop.id));
                                                        });
                                                    }}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            destroy(shop.id)
                                                        }
                                                        className="bg-red-100 text-red-800 active:bg-red-200 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-red-400 border border-red-400"
                                                    >
                                                        Delete
                                                    </button>
                                                </form>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
