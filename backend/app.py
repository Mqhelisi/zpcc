from flask import Flask, request,send_file, url_for,current_app, make_response
from flask_restful import Resource, Api,reqparse
# from flask_sqlalchemy import SQLAlchemy
import json
from flask_cors import CORS
import os
import datetime
from models import setup_db, Tender, User, Action, Project
import string
import random


def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


app = Flask(__name__)
api = Api(app)

app.config['SECRET_KEY'] = 'mysecret'

db = setup_db(app)

cors = CORS(app, resources={r'/*': {"origins": '*'}})


class AllProjects(Resource):

    def get(self):
        projects = Project.query.all()
        return [project.json() for project in projects]



class OneProject(Resource):

    def get(self, idn):
        projects = Project.query.get(idn)
        return projects.json()

class QuickProjects(Resource):

    def get(self):
        projects = Project.query.all()
        return {'products': [{"id": str(project.json()['id']), "text": project.json()['name']} for project in projects]}

class AllTenders(Resource):

    def get(self):
        tenders = Tender.query.all()
        return [tender.json() for tender in tenders]

class AllUsers(Resource):

    def get(self):
        users = User.query.all()
        return [user.json() for user in users]

class AllActions(Resource):

    def get(self):
        actions = Action.query.all()
        return [action.json() for action in actions]

class PostProj(Resource):

    def post(self):
        request_data = json.loads(request.data)
        project = Project(request_data['name'], request_data['bus_case'],
                     request_data['background'], request_data['justification'],
                      request_data['proj_goals'])
        db.session.add(project)
        db.session.commit()
        return "coreated obj:" + request_data['name']

class PostTndr(Resource):


    def post(self):
        request_data = json.loads(request.data)
        tndr = Tender(request_data['name'],  request_data['start_date'], request_data['description'])
        db.session.add(tndr)
        db.session.commit()
        return "created tender with name: " + request_data['name']

class PostUser(Resource):


    def post(self):
        request_data = json.loads(request.data)
        user = User(request_data['name'],  request_data['join_date'],
                 request_data['position'],  request_data['surname'])
        db.session.add(user)
        db.session.commit()
        return "created user with name: " + request_data['name']

class PostAction(Resource):


    def post(self):
        request_data = json.loads(request.data)
        action = Action(request_data['name'],  request_data['description'], request_data['act_date'],
                     request_data['project'],  request_data['actor'])
        db.session.add(action)
        db.session.commit()
        return "created action with name: " + request_data['name']


api.add_resource(AllProjects,'/projall')
api.add_resource(AllTenders, '/tendall')
api.add_resource(AllUsers,'/useall')
api.add_resource(AllActions,'/actall')
api.add_resource(PostProj,'/projpost')
api.add_resource(PostTndr,'/tndrpost')
api.add_resource(PostUser,'/userpost')
api.add_resource(PostAction,'/actpost')
api.add_resource(QuickProjects,'/quipro')
api.add_resource(OneProject,'/onepro/<int:idn>')


# import json
# x =  '{ "GOAL 1":"not getting sued", "GOAL 2":"human lives", "GOAL 3":"social responsibility"}'
# y = json.loads(x)
# z =  '{ "Proj Manager":"John Smith", "Proj Chairman":"C Mann", "Proj Board 1":"H Meng"}'
# a = json.loads(z)
# word = Project('Empumalanga relocation Project',
#              'we will get sued if people get sick where we emit so we haeve to relocate them ',
#              'people are already living there so we are stuck', 
#                 'we will not get sued', y,a)


# db.session.add(word)


# # b =  '{ "GOAL 1":"WAy More getsi", "GOAL 2":"Way MORE MONEY", "GOAL 3":"Into Zeskhiwa even more"}'
# # c = json.loads(b)
# # d =  '{ "Proj Manager":"J Jones", "Proj Chairman":"E Smith", "Proj Board 1":"J Milli"}'
# # e = json.loads(d)
# # wordy = Project('Hwange Unit 7 Project',
# #              'we need more electricity for people',
# #              'peope keep buying new phones and electrically consuming things', 
# #                 'we will get more money in the gurb yeyi', c,e)

# # db.session.add(wordy)

# db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)





