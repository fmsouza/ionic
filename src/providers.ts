import { AppVersion } from '@ionic-native/app-version';
import { Globalization } from '@ionic-native/globalization';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Keyboard } from '@ionic-native/keyboard';
import { Toast as ToastProvider } from '@ionic-native/toast';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Analytics } from './core/analytics';
import { PreferencesDAO } from './dao/preferences';
import { LinesDAO } from './dao/lines';
import { HistoryDAO } from './dao/history';
import { FavoritesDAO } from './dao/favorites';
import { Toast } from './core/toast';
import { ItineraryDAO } from './dao/itinerary';
import { ItineraryManager } from './managers/itinerary';
import { LineManager } from './managers/line';
import { PreferencesManager } from './managers/preferences';
import { ItineraryService } from './services/itinerary';
import { SearchService } from './services/search';

export const Providers: any = [
    AppVersion,
    Globalization,
    GoogleAnalytics,
    GoogleMaps,
    Keyboard,
    ToastProvider,
    SplashScreen,
    StatusBar,
    
    Analytics,
    ItineraryService,
    SearchService,
    ItineraryManager,
    LineManager,
    PreferencesManager,
    Toast,
    ItineraryDAO,
    FavoritesDAO,
    HistoryDAO,
    LinesDAO,
    PreferencesDAO,
];