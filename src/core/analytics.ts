import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ANALYTICS_UA, DEBUG_MODE } from '../const';

/**
 * Analytics driver API abstraction. 
 * 
 * @class Analytics
 */
@Injectable()
export class Analytics {

    constructor(private ga: GoogleAnalytics) {}

    /**
     * Configures Analytics driver
     * 
     * @static
     * @returns {Promise<void>}
     */
    public configure(): Promise<void> {
        return this.ga.startTrackerWithId(ANALYTICS_UA)
            .then(() => this.ga.enableUncaughtExceptionReporting(true), console.error)
            .then(() => { if (DEBUG_MODE) this.ga.debugMode(); }, console.error);
    }

    /**
     * Track a screen
     *
     * @param {string}  title        - Screen title
     * @param {string}  campaignUrl  - (Optional) Campaign url for measuring referrals
     * 
     * @static
     * @returns {Promise<void>}
     */
    public trackView(title: string, campaignUrl?: string): Promise<void> {
        return this.ga.trackView(title, campaignUrl)
            .then(console.log, console.error);
    }

    /**
     * Track an event
     * @param {string}  category
     * @param {string}  action
     * @param {string}  label
     * @param {number}  value
     * 
     * @static
     * @returns {Promise<void>}
     */
    public trackEvent(category: string, action: string, label?: string, value?: number): Promise<void> {
        return this.ga.trackEvent(category, action, label, value)
            .then(console.log, console.error);
    }

    /**
     * Set a UserId
     * @param {string}  id
     * 
     * @static
     * @returns {void}
     */
    public setUserId(id: string): void {
        this.ga.setUserId(id);
    }
}