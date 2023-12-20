import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Show({ auth, shop }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Shop Details
                </h2>
            }
        >
            <Head title="Show Shops" />

            <div className="mt-4 flex sm:justify-center items-center bg-gray-100">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={shop.name}
                                className="mt-1 block w-full"
                                required
                                readOnly
                            />

                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="website" value="Website" />
                            <TextInput
                                id="website"
                                name="website"
                                value={shop.website}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("website", e.target.value)
                                }
                                readOnly
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="contact" value="Contact" />
                            <TextInput
                                id="contact"
                                name="contact"
                                value={shop.contact}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("contact", e.target.value)
                                }
                                readOnly
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                name="address"
                                value={shop.address}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                readOnly
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="description"
                                value="Description"
                            />
                            <TextInput
                                id="description"
                                name="description"
                                value={shop.description}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                readOnly
                                required
                            />
                        </div>

                        <div className="items-center justify-end mt-4">
                            <Link
                                href={route("shops.index")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Go to Shop
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
