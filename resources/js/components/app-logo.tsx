import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-4">
            <div className="flex w-8 h-8 items-center justify-center rounded-md">
                <AppLogoIcon className="w-6 h-6 text-black dark:text-white" />
            </div>
            <div className="flex-1 text-left text-lg">
                <span className="truncate font-extrabold leading-tight">TurnUp Admin</span>
            </div>
        </div>
    );
}
