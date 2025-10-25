import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Form, Head, Link, usePage } from '@inertiajs/react';
import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { CheckCircle2, Upload, User } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];


export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-8">
                    <div>
                        <HeadingSmall
                            title="Profile information"
                            description="Update your name and email address"
                        />
                    </div>

                    <Form
                        method='post'
                        action={route('profile.update')}
                        encType='multipart/form-data'
                        className="space-y-6"
                    >
                        {({ processing, recentlySuccessful, errors, }) => (
                            <>
                                {/* Profile Photo Section */}
                                <div className="rounded-lg border border-border bg-card p-6">
                                    <Label className="text-base font-semibold">Profile Photo</Label>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Upload a photo to personalize your account
                                    </p>

                                    <div className="mt-4 flex items-center gap-6">
                                        <div className="relative">
                                            {auth.user.photo_url ? (
                                                <img
                                                    src={auth.user.photo_url}
                                                    alt='Profile photo'
                                                    className='h-20 w-20 rounded-full object-cover ring-2 ring-border'
                                                />
                                            ) : (
                                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted ring-2 ring-border">
                                                    <User className="h-10 w-10 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            <Label
                                                htmlFor='photo_url'
                                                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                            >
                                                <Upload className="h-4 w-4" />
                                                Choose new photo
                                            </Label>
                                            <Input
                                                id='photo_url'
                                                type='file'
                                                className='hidden'
                                                name='photo_url'
                                                accept='image/*'
                                            />
                                            <p className="mt-2 text-xs text-muted-foreground">
                                                JPG, PNG or GIF. Max size 2MB.
                                            </p>
                                        </div>
                                    </div>

                                    <InputError className="mt-3" message={errors.photo_url} />
                                </div>

                                {/* Personal Information Section */}
                                <div className="rounded-lg border border-border bg-card p-6">
                                    <Label className="text-base font-semibold">Personal Information</Label>
                                    <p className="mt-1 mb-6 text-sm text-muted-foreground">
                                        Your name and contact details
                                    </p>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor='first_name'>First Name</Label>
                                            <Input
                                                id='first_name'
                                                name='first_name'
                                                defaultValue={auth.user.first_name}
                                                autoComplete='given-name'
                                                placeholder='Enter first name'
                                                className="transition-all focus:ring-2"
                                            />
                                            <InputError message={errors.first_name} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor='last_name'>Last Name</Label>
                                            <Input
                                                id='last_name'
                                                name='last_name'
                                                defaultValue={auth.user.last_name}
                                                autoComplete='family-name'
                                                placeholder='Enter last name'
                                                className="transition-all focus:ring-2"
                                            />
                                            <InputError message={errors.last_name} />
                                        </div>

                                        <div className="space-y-2 sm:col-span-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                defaultValue={auth.user.email}
                                                name="email"
                                                autoComplete="username"
                                                placeholder="Enter email address"
                                                className="transition-all focus:ring-2"
                                            />
                                            <InputError message={errors.email} />
                                        </div>

                                        <div className="space-y-2 sm:col-span-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                defaultValue={auth.user.phone ?? ''}
                                                name="phone"
                                                autoComplete="tel"
                                                placeholder="Enter phone number"
                                                className="transition-all focus:ring-2"
                                            />
                                            <InputError message={errors.phone} />
                                        </div>
                                    </div>
                                </div>

                                {/* Email Verification Alert */}
                                {mustVerifyEmail && auth.user.email_verified_at === null && (
                                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/50">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-amber-600 dark:text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                                                    Email verification required
                                                </p>
                                                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                                                    Your email address is unverified.{' '}
                                                    <Link
                                                        href={route('verification.send')}
                                                        method="post"
                                                        as="button"
                                                        className="font-semibold underline decoration-amber-400 underline-offset-4 transition-colors hover:text-amber-900 dark:hover:text-amber-100"
                                                    >
                                                        Click here to resend the verification email.
                                                    </Link>
                                                </p>
                                                {status === 'verification-link-sent' && (
                                                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
                                                        <CheckCircle2 className="h-4 w-4" />
                                                        Verification link sent to your email
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition-opacity duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity duration-300"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-500">
                                            <CheckCircle2 className="h-4 w-4" />
                                            Changes saved successfully
                                        </div>
                                    </Transition>

                                    <Button
                                        disabled={processing}
                                        className="ml-auto px-8"
                                        size="lg"
                                    >
                                        {processing ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
