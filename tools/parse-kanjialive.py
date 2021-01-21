# coding=utf-8

import argparse
#import ast
import csv
import json

from collections import OrderedDict
from os import listdir

parser = argparse.ArgumentParser()
parser.add_argument('data', help='data to parse')
#parser.add_argument('rads', help='rads to parse')
args = parser.parse_args()

def load_dictionary(directory):
    files = [file for file in listdir(directory) if file.startswith('dict')]

    data = {}
    for file in files:
        with open(directory + '/' + file, 'r') as fp:
            for elem in json.load(fp, object_pairs_hook=OrderedDict):
                data[json.dumps(elem, ensure_ascii=False).encode('utf8')] = elem
    
    return list(data.values())

def load_kanjialive_data(filepath):
    data = []
    with open(filepath, 'r') as fp:
        lines = csv.reader(fp)
        header = next(lines)
        for line in lines:
            obj = {}
            for i in range(len(header)):
                value = line[i]
                #value = line[i].decode('utf8')
                if value.startswith('['):
                    obj[header[i]] = []
                    for pair in value[len('[ [ "'):][:-len('" ] ]')].split('" ], [ "'):
                        words = pair.split('", "')
                        obj[header[i]].append({'japanese': words[0], 'english': words[1]})
                else:
                    obj[header[i]] = value
            data.append(obj)

    return data

dictionary = load_dictionary('data')
kanjialive_data = load_kanjialive_data(args.data)
#kanjialive_radicals = load_kanjialive_radicals(args.rads)
#print kanjialive_data[0]

with open('data/kanji.json', 'w') as fp:
    fp.write('[')
    first_elem = True
    for elem in kanjialive_data:
        if first_elem:
            first_elem = False
            fp.write('\n    ')
        else:
            fp.write(',\n    ')
        fp.write('{')
        fp.write('"kanji": "')
        fp.write(elem['kanji'])
        fp.write('", "reading": ["')
        #fp.write((elem['onyomi_ja'] + '、' + elem['kunyomi_ja']).replace('、', ';').strip(';').replace(';', '; '))
        fp.write('", "'.join((elem['onyomi_ja'] + '、' + elem['kunyomi_ja']).replace('、', ';').strip(';').split(';')))
        fp.write('"], "meaning": ["')
        #fp.write(elem['kmeaning'].replace(', ', '; '))
        fp.write('", "'.join(elem['kmeaning'].split(', ')))
        fp.write('"], "radical": "')
        fp.write(elem['rad_name_ja'])
        fp.write('"}')
    fp.write('\n]\n')
