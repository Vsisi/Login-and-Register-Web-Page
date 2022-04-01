from flask import Flask, render_template, make_response,  send_from_directory, session, redirect, url_for, request, Blueprint
from constant import PASSWORD, USER_NAME, EMAIL_ADDR, VERIFICATION_CODE
from account import loginSuccess, registerSuccess

loginRelatedApp = Blueprint('loginRelatedApp', __name__, template_folder="templates")

#login page and processing
@loginRelatedApp.route('/login', methods=["GET", "POST"])
def login():
    if request.method == 'POST':
        if loginSuccess(request.form[USER_NAME], request.form[PASSWORD]):
            session[USER_NAME] = request.form[USER_NAME]
            return redirect(url_for("home"))
        else:
            return render_template('login.html', loginFail="Wrong username or password")
    else:
        if USER_NAME in session: #already logged in
            return redirect(url_for('home'))
        return render_template('login.html')

#logout
@loginRelatedApp.route('/logout', methods=["GET", "POST"])
def logout():
    session.pop(USER_NAME, None)
    return redirect(url_for("home"))

@loginRelatedApp.route('/forgetPassword')
def forgetPassword():
    return "forget password"

@loginRelatedApp.route('/register', methods=["GET", "POST"])
def register():
    if request.method == 'POST':
        if registerSuccess(request.form[USER_NAME], request.form[PASSWORD], request.form[EMAIL_ADDR], request.form[VERIFICATION_CODE]):
            session[USER_NAME] = request.form[USER_NAME]
            return redirect(url_for("home"))
    else:
        return render_template("register.html")