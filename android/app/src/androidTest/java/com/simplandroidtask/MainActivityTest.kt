package com.simplandroidtask

import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.*
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import androidx.test.rule.ActivityTestRule
import androidx.test.runner.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith


@RunWith(AndroidJUnit4::class)
class MainActivityTest {
    @get:Rule
    var activityRule = ActivityTestRule<MainActivity>(MainActivity::class.java)

    @Test
    fun test_payment_mode() {
        EspressoViewFinder.waitForDisplayed(withContentDescription("amountInputView")){
            view->
            onView(view).check(matches(isDisplayed()))
                .perform(typeText("100"), closeSoftKeyboard())
        }

        EspressoViewFinder.waitForDisplayed(withContentDescription("paymentModeUPI"),0){
                view->
            onView(view).check(matches(isDisplayed()))
                .perform(click())
        }
        EspressoViewFinder.waitForDisplayed(withContentDescription("payButton"),0){
                view->
            onView(view).check(matches(isDisplayed()))
                .perform(click())
        }

    }
}